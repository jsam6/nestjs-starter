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

    @Column()
    nationality: string

    @Column()
    bio: string

    @Column({name:"mobile_prefix"})
    mobilePrefix: number

    @Column({name:"mobile_number"})
    mobileNumber: number
    
    @Column({name:"image_url"})
    imageUrl: string

    @Column({name:"city"})
    city : string
    
    @Column({name:"state"})
    state : string
}
