-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 08-05-2016 a las 15:05:51
-- Versión del servidor: 5.6.28
-- Versión de PHP: 5.5.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cinesa`
--

CREATE TABLE IF NOT EXISTS `Cinesa` (
  `dia` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `s1` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `s2` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `s3` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `s4` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `Cinesa`
--

INSERT INTO `Cinesa` (`dia`, `s1`, `s2`, `s3`, `s4`) VALUES
('Domingo', '12:30', '16:40', '21:30', '23:50'),
('Jueves', '21:30', '22:45', '23:40', NULL),
('Lunes', '12:30', '16:00', '18:00', NULL),
('Martes', '19:30', '20:30', '21:30', '23:00'),
('Miércoles', '19:00', '20:00', NULL, NULL),
('Sábado', '16:40', '21:40', NULL, NULL),
('Viernes', '17:00', '19:30', '22:45', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Cinesa`
--
ALTER TABLE `Cinesa`
  ADD PRIMARY KEY (`dia`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
