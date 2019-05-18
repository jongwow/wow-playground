module.exports = (sequelize, DataTypes) => (
	sequelize.define('todo', {
		title: {
			type: DataTypes.STRING(20),
			allowNull:false,
		},
		content: {
			type: DataTypes.STRING(140),
			allowNull:true,
		},
		duedate: {
			type: DataTypes.DATE,
			allowNull:true,
		},
		prior: {
			type: DataTypes.DECIMAL,
			allowNull:false,
		},
		check: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
	}, {
			timestamp:true,
			paranoid:true,
	})
);
