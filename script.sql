CREATE TABLE noticias(
  id_noticia INT NOT NULL PRIMARY KEY auto_increment,
  titulo VARCHAR (100),
  noticia TEXT,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE noticias ADD COLUMN resumo VARCHAR(100);
ALTER TABLE noticias ADD COLUMN autor VARCHAR(30);
ALTER TABLE noticias ADD COLUMN data_noticia DATE;