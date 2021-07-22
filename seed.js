import sql from './lib/postgres'

const createTables = async () => {
    await sql`
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    
    CREATE TABLE categories (
        id varchar(255) primary key not null,
        title varchar(255),
        description text,
        created_at timestamp default now(),
        updated_at timestamp default now(),
        image_url varchar(255)
    );
`
}


// Other tables to create

// We need to create an issues table.
// This is where we will store conditions and issues
// This will have an id, title, description, category_id, created_at, updated_at, color
// The category_id should reference the id of the category above
// An issue can only have one category, so we can put the reference on this table.

// We need to create a content table
// This is where we will store the information on content.
// This will have an id, title, description, image_url, video_url, external_url, content_type, created_at, updated_at

// We need to create a reference table so that content can have many categories
// This will have an issue_id, and a content_id field.

