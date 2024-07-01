import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proposal {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    post_id!: number;

    @Column()
    freelancerId!: number;

    @Column()
    description!: string;

    @Column('decimal')
    amount!: number;

    @Column()
    status!: string;
}
