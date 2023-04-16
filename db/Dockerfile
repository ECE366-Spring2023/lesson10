FROM postgres

# Copy the SQL files to the container
COPY init.sql /docker-entrypoint-initdb.d/0_init.sql
COPY users.sql /docker-entrypoint-initdb.d/1_users.sql
COPY game.sql /docker-entrypoint-initdb.d/2_game.sql