import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {

    constructor(
        @InjectRepository(Player)
        private playerRepository: Repository<Player>
    ){

    }
    async create(createPlayerDto: CreatePlayerDto): Promise<{ status: boolean; message?: string; data?: any; }>  {
        const player = await this.playerRepository.findOne({ where: {email: createPlayerDto.email} })
        if (player) {
            return {
                status: false,
                message: "player already exist"
            }
        }

        const createdPlayer = await this.playerRepository.save(createPlayerDto)
        
        return {
            status: true,
            data: createdPlayer
        }
    }

    findAll() {
        return this.playerRepository.find()
    }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

    async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<{ status: boolean; message?: string; data?: any; }> {
        const player = await this.playerRepository.findOne({ where: {id: id} })
        if (!player) return { status: false, message: "player not exist" }

        player.username = updatePlayerDto.username
        player.email = updatePlayerDto.email
        const updated = await this.playerRepository.save(player)

        return {
            status: true,
            data: updated
        }
    }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
