import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Response } from 'express';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

    @Post()
    async create(@Res() res: Response, @Body() createPlayerDto: CreatePlayerDto) {
        const resp = await this.playerService.create(createPlayerDto)

        if (resp.status == false) {
            return res.status(HttpStatus.BAD_REQUEST).json(resp.message)
        }

        return res.status(HttpStatus.OK).json(resp)
    }

    @Get()
    findAll() {
        return this.playerService.findAll()
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: string) {
        const resp = await this.playerService.findOne(+id)
        
        if (resp.status == false) {
            return res.status(HttpStatus.BAD_REQUEST).json(resp.message)
        }

        return res.status(HttpStatus.OK).json(resp)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
        return this.playerService.update(+id, updatePlayerDto);
    }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
