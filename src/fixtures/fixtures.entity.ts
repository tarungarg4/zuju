import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Teams } from '../teams/teams.entity';
import { Tournaments } from '../tournaments/tournaments.entity';

@Entity()
export class Fixtures extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne((type) => Tournaments)
  @JoinColumn()
  tournament: Tournaments;

  @ApiProperty()
  @ManyToOne((type) => Teams)
  @JoinColumn()
  homeTeam: Teams;

  @ApiProperty()
  @ManyToOne((type) => Teams)
  @JoinColumn()
  awayTeam: Teams;

  @ApiProperty()
  @Column({ default: 0 })
  @IsOptional()
  homeScore?: number;

  @ApiProperty()
  @Column({ default: 0 })
  @IsOptional()
  awayScore?: number;

  @ApiProperty()
  @Column({ type: 'datetime' })
  startTime: Date;

  @ApiProperty()
  @Column({ type: 'boolean', default: false })
  ended: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
