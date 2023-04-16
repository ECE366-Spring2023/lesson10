\c rps

CREATE SEQUENCE user_seq start with 1;

CREATE TABLE public.users (
      user_id int8 NOT NULL DEFAULT nextval('user_seq'::regclass),
      user_name varchar(30) NOT NULL,
      "password" varchar(30) NOT NULL,
      total_games int4 NULL DEFAULT 0,
      total_win int4 NULL DEFAULT 0,
      total_loss int4 NULL DEFAULT 0,
      total_tie int4 NULL DEFAULT 0,
      CONSTRAINT users_pkey PRIMARY KEY (user_id),
      CONSTRAINT users_user_name_key UNIQUE (user_name)
);

INSERT INTO users (user_name, password) VALUES ('Chris', 'password');
INSERT INTO users (user_name, password) VALUES ('Alpha', 'password');
INSERT INTO users (user_name, password) VALUES ('Beta', 'password');
INSERT INTO users (user_name, password) VALUES ('Gamma', 'password');
INSERT INTO users (user_name, password) VALUES ('Zeta', 'password');
