import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:"player"})
export class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    position: string
}
