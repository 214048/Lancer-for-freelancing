import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Proposal extends Model {
    public id!: number;
    public author!: string;
    public amount!: number;
    public description!: string;
}

Proposal.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    author: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(1024),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'proposals'
});

export default Proposal;