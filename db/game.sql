\c rps

CREATE SEQUENCE game_seq start with 1;

CREATE TABLE game (
      game_id bigint NOT NULL DEFAULT nextval('game_seq'),
      p1_id bigint NOT NULL,
      p2_id bigint NOT NULL,
      p1_score int NOT NULL DEFAULT 0,
      p2_score int NOT NULL DEFAULT 0,
      total_rounds int NOT NULL,
      current_round int NOT NULL,
      winner_id bigint DEFAULT NULL,
      PRIMARY KEY (game_id),
      FOREIGN KEY (p1_id) REFERENCES users(user_id) ON DELETE CASCADE,
      FOREIGN KEY (p2_id) REFERENCES users(user_id) ON DELETE CASCADE,
      CHECK (p1_id <> p2_id),
      CHECK (winner_id = p1_id OR winner_id = p2_id)
);