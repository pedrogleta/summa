CREATE TABLE topic_dependency (
    -- 'prerequisite_id' is the topic you must learn FIRST
    prerequisite_id INT NOT NULL,

    -- 'dependent_id' is the topic that depends on the prerequisite
    dependent_id INT NOT NULL,

    -- Both are foreign keys to the main topic table
    FOREIGN KEY (prerequisite_id) REFERENCES topic(id),
    FOREIGN KEY (dependent_id) REFERENCES topic(id),

    -- This ensures you can't have the same dependency twice
    PRIMARY KEY (prerequisite_id, dependent_id)
);

-- Index for fast dependency lookups
CREATE INDEX idx_dependency_dependent ON topic_dependency(dependent_id);
