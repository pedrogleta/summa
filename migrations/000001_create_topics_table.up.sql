CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,

    -- This column defines the TAXONOMY (your tree)
    -- It's the Adjacency List model.
    parent_id INT,

    FOREIGN KEY (parent_id) REFERENCES topic(id)
);

-- Index for fast tree traversal
CREATE INDEX idx_topic_parent ON topic(parent_id);
