-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2016 at 01:07 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `authdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `id` int(11) NOT NULL,
  `display_Name` varchar(64) NOT NULL,
  `user_email` varchar(256) NOT NULL,
  `user_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`id`, `display_Name`, `user_email`, `user_password`) VALUES
(1, 'hasan', 'hasan.@hasah.com', 'ddd'),
(2, 'abc', 'abc@abc.com', 'abc'),
(3, 'hasan', 'h@i.com', 'hasan'),
(4, 'a', 'b@a.com', 'c'),
(5, 'pop', 'pop@p.com', 'pop'),
(6, 'pop1', 'pop@p.com', 'pop'),
(7, 'pop2', 'pop@p.com', 'pop'),
(8, 'pop3', 'pop@p.com', 'pop'),
(9, 'a2', 'a@2.com', 'a1'),
(10, 'hasan1', 'h1@i.com', '111'),
(11, 'hasan11', 'h1@i.com', '111'),
(12, 'Muhammad Hasan', 'hasan.idrees@outlook.com', '123456'),
(2147483647, 'zohaib', 'z@i.com', '111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
