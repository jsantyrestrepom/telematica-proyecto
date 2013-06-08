create database middleware;

use middleware;

CREATE TABLE middleware.tbl_usuario (
  id_usuario INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  red_social VARCHAR(40) NOT NULL,
  access_token VARCHAR(200) NOT NULL,
  PRIMARY KEY (id_usuario)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;