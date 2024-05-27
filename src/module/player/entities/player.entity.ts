import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:"player"})
export class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({nullable:true})
    position: string

    @Column({nullable:true})
    nationality: string

    @Column({nullable:true})
    bio: string

    @Column({name:"mobile_prefix", nullable: true})
    mobilePrefix: number

    @Column({name:"mobile_number", nullable: true})
    mobileNumber: number
    
    @Column({name:"image_url", nullable: true})
    imageUrl: string

    @Column({name:"city", nullable: true})
    city : string
    
    @Column({name:"state", nullable: true})
    state : string
}
