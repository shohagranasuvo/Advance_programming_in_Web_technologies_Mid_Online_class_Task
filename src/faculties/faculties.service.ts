import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { UpdateFacultyDto } from './dto/update-faculty.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';

@Injectable()
export class FacultiesService {


  constructor(
    @InjectRepository(Faculty)
    private readonly facultyrepo: Repository<Faculty>,
  ) {}

 async create(createFacultyDto: CreateFacultyDto) {
  const faculty = this.facultyrepo.create(createFacultyDto);
  return this.facultyrepo.save(faculty);
}


  findAll() {
    return `This action returns all faculties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faculty`;
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
