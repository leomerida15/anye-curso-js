/** @format */

const typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
	type: "postgres",
	url: "postgres://pgycszrf:8VfY_sCXOMNv63OcUUFE7sTf5xAPKw77@motty.db.elephantsql.com/pgycszrf",
	synchronize: true,
	entities: [require("./entitys/dogs.db")],
});

module.exports = dataSource;
