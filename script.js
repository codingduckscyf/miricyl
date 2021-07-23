import sql from './lib/postgres';

const tables = async () => {
	await sql`ALTER TABLE categories ALTER COLUMN updated_at SET DEFAULT NOW()`
	await sql`ALTER TABLE content ALTER COLUMN updated_at SET DEFAULT NOW()`
	await sql`ALTER TABLE issues ALTER COLUMN updated_at SET DEFAULT NOW()`

	// 	await sql`
	// CREATE TABLE categories (
	// 	id SERIAL PRIMARY KEY,
	// 	name VARCHAR(255) NOT NULL,
	// 	description TEXT,
	// 	created_at DATE DEFAULT CURRENT_DATE NOT NULL,
	// 	updated_at DATE
	// )
	// `
	// 	await sql`
	// CREATE TABLE content (
	// 	id SERIAL PRIMARY KEY,
	// 	title VARCHAR(255) NOT NULL,
	// 	description TEXT,
	// 	content_type 	VARCHAR(255) NOT NULL,
	// 	img_url TEXT,
	// 	video_url TEXT,
	// 	created_at DATE DEFAULT CURRENT_DATE NOT NULL,
	// 	updated_at DATE
	// )
	// `
	// 	await sql`
	// CREATE TABLE issues (
	// 	id SERIAL PRIMARY KEY,
	// 	category_id INT REFERENCES categories(id) NOT NULL,
	// 	name VARCHAR(255) NOT NULL,
	// 	description TEXT NOT NULL,
	// 	created_at DATE DEFAULT CURRENT_DATE NOT NULL,
	// 	updated_at DATE
	// )
	// `

	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 1)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2, 1)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 2)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2, 2)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 3)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 4)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3,5)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 6)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(4,7)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(5, 8)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(6,9)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(7,10)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(8, 11)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 12)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2,13)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 14)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(4, 15)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(5,16)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(6, 17)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(7, 18)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(8, 19)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 20)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2, 21)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 22)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(4, 23)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(5, 24)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(6, 25)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(7, 26)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(8, 27)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 28)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2, 29)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 30)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(4, 31)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(5, 32)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(6, 33)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(7, 34)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(8, 35)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(1, 36)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(2, 37)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 38)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(4, 39)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(5, 40)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(6, 41)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(7, 42)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(8, 43)`
	// await sql`INSERT INTO issue_content_rel(issue_id, content_id) VALUES(3, 44)`

	// 	await sql`
	// CREATE TABLE issue_content_rel (
	// 	issue_id INT,
	// 	content_id INT,
	// 	PRIMARY KEY (issue_id, content_id)
	// )
	// `
}

tables()