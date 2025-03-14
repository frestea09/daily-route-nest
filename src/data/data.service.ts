import { Injectable, Inject, Logger } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { PrismaService } from 'src/prisma/prisma.service';
import { plainToInstance } from 'class-transformer';
import { DataDto } from './data-dto/data-dto';

@Injectable()
export class DataService {
  private readonly logger = new Logger(DataService.name);

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prismaService: PrismaService,
  ) {}
  getData(key: string) {
    // Cek apakah data sudah ada di cache
    const cachedData = this.cacheManager.get(key);
    if (cachedData) {
      console.log('Data from cache:', cachedData);
      return cachedData; // Mengambil data dari cache
    }

    // Jika tidak ada di cache, ambil dari database melalui Prisma
    const newData = this.prismaService.post.findMany();

    // Simpan data ke cache dengan TTL (waktu kedaluwarsa) 60 detik
    this.cacheManager.set(key, newData);

    console.log('Data from database:', newData);
    return newData; // Mengambil data dari Prisma dan menyimpannya ke cache
  }
  getDataTemp() {
    return this.prismaService.post.findMany();
  }
  async getAllPosts() {
    this.logger.log('Memanggil getData()'); // Log biasa
    this.logger.warn('Ini peringatan!'); // Log peringatan
    this.logger.error('Terjadi kesalahan!'); // Log error

    const cacheKey = 'posts_list'; // Key untuk menyimpan daftar postingan

    // 1️⃣ Cek apakah data sudah ada di cache
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      console.log('Data dari cache:', cachedData);
      return plainToInstance(DataDto, cachedData, {
        excludeExtraneousValues: true,
      });
    }

    // 2️⃣ Jika belum ada di cache, ambil dari database
    const posts = await this.prismaService.post.findMany();

    // 3️⃣ Simpan data ke cache agar bisa dipakai nanti
    await this.cacheManager.set(cacheKey, posts); // Cache 60 detik

    console.log('Data dari database:', posts);

    // 4️⃣ Transformasi data ke DTO sebelum dikembalikan
    return plainToInstance(DataDto, posts, { excludeExtraneousValues: true });
  }
}
