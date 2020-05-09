-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2020 at 01:35 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `ID` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Phone` int(20) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`ID`, `Name`, `Email`, `Password`, `Phone`, `Address`, `Gender`) VALUES
(1, 'ola', 'olahantoli@gmail.com', '123', 599513442, 'lkml5', 'f'),
(2, 'Walaa', 'walaadwikat3@gmail.com', '12345', 598594135, 'Nablus', 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `CompanyName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` int(20) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `StartDate` datetime(6) NOT NULL,
  `ExpiryDate` datetime(6) NOT NULL,
  `ServiceType` varchar(50) NOT NULL,
  `VehiclesType` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`CompanyName`, `Email`, `Phone`, `Address`, `StartDate`, `ExpiryDate`, `ServiceType`, `VehiclesType`) VALUES
('', '', 0, '', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 'lsjv', 'isjfv'),
('Al-Masri Gas Station', 'AlmasriGas@gmail.com', 598020820, 'Nablus Alshuhada roundabout', '2020-02-02 00:00:00.000000', '2024-02-22 00:00:00.000000', 'Refilling Fuel', 'All Types'),
('BMWCompany', 'BMWcompany@gmail.com', 9232955, 'Nablus', '2020-02-22 00:00:00.000000', '2022-02-22 00:00:00.000000', 'Change and repair Tyres', 'BMW');

-- --------------------------------------------------------

--
-- Table structure for table `cusomer`
--

CREATE TABLE `cusomer` (
  `ID` int(40) NOT NULL,
  `Name` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Phone` int(20) NOT NULL,
  `CustomerVehicles` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cusomer`
--

INSERT INTO `cusomer` (`ID`, `Name`, `Password`, `Email`, `Phone`, `CustomerVehicles`) VALUES
(1, 'Hiba', '123456', 'HibaAlasmar@gmail.com', 598020833, 'Toyota'),
(2, 'OLA', '1161109999', 'olahantoli@gmail.com', 599513442, ''),
(6, 'OLKKK', '116110', 'olahantoli@gmail.com', 599513442, ''),
(9, 'olaa', '1122', 'tyty', 84735, ''),
(10, 'olaa', '1122', 'olahantol@gmail.com', 84735, ''),
(11, 'Ø¹Ù„Ø§', '123', 'ola', 1123, ''),
(12, 'Ø¹Ù„Ø§', '123', 'ola2', 883, ''),
(13, 'tt', '7373', 'tt', 873, ''),
(14, 'hala', '66', 'hala', 6688, ''),
(15, 'mama', 'mama', 'mama', 88171, '');

-- --------------------------------------------------------

--
-- Table structure for table `customervehicles`
--

CREATE TABLE `customervehicles` (
  `VehicleType` varchar(30) NOT NULL,
  `VehicleModel` varchar(40) NOT NULL,
  `YearOfManufacture` year(4) NOT NULL,
  `PlateNumber` varchar(20) NOT NULL,
  `RegistrationNumber` varchar(40) NOT NULL,
  `CustomerID` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customervehicles`
--

INSERT INTO `customervehicles` (`VehicleType`, `VehicleModel`, `YearOfManufacture`, `PlateNumber`, `RegistrationNumber`, `CustomerID`) VALUES
('toyota', 'heh332', 2013, '11', 'RegistrationNumber', 0),
('TOYOTA', '2156df2015', 2015, '220011', '555', 1),
('jshs', 'hzgvs44', 0000, '3332', '8272626', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Join_our_team`
--

CREATE TABLE `Join_our_team` (
  `ID` int(50) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comment` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Join_our_team`
--

INSERT INTO `Join_our_team` (`ID`, `name`, `email`, `comment`) VALUES
(1, 'ola', 'ola', 'ola'),
(2, 'ola', 'GG', 'ooo');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderNum` int(60) NOT NULL,
  `OrderType` varchar(30) NOT NULL,
  `OrderStatus` varchar(40) NOT NULL,
  `PickupTime` datetime(6) NOT NULL,
  `DropoffTime` datetime(6) NOT NULL,
  `PickupLocation` varchar(40) NOT NULL,
  `DropoffLocation` varchar(40) NOT NULL,
  `UseVehicle` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_form`
--

CREATE TABLE `order_form` (
  `ID` int(200) NOT NULL,
  `OrderType` varchar(50) NOT NULL,
  `Vehicle` varchar(30) NOT NULL,
  `Information` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_form`
--

INSERT INTO `order_form` (`ID`, `OrderType`, `Vehicle`, `Information`) VALUES
(1, 'Battery_Charge', '11', NULL),
(2, 'Break_Down', '11', '84838 + jshegysje'),
(3, 'Break_Down', '11', 'phone :84838 + describtion : jshegysje'),
(4, 'Break_Down', '11', 'phone :84838 , describtion : jshegysje'),
(5, 'Battery_Charge', '11', NULL),
(6, 'Recovery', '11', 'phone :02982'),
(7, 'Refilling_Fuel', '11', 'type :solar , quantity : 4'),
(8, 'Refilling_Fuel', '11', 'type :dessel , quantity : 4'),
(9, 'Recovery', '11', 'phone :9282h'),
(10, 'Refilling_Fuel', '11', 'type :dessel , quantity : 5'),
(11, 'Refilling_Fuel', '11', 'type :dessel , quantity : 5'),
(12, 'changing', '11', 'type :changing , quantity : 1 , rad of tyre :16');

-- --------------------------------------------------------

--
-- Table structure for table `provideraccount`
--

CREATE TABLE `provideraccount` (
  `ID` int(40) NOT NULL,
  `ProviderName` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Phone` int(20) NOT NULL,
  `Address` varchar(40) NOT NULL,
  `RelatedCompany` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provideraccount`
--

INSERT INTO `provideraccount` (`ID`, `ProviderName`, `Email`, `Phone`, `Address`, `RelatedCompany`) VALUES
(1, 'Ahmad', 'AhmadAmer@gmail.com', 595875220, 'Jenin', 'RelatedCompany'),
(2, 'Wael', 'WaelAlmasri@gmail.com', 595582120, 'Nablus', 'Al-Masri Gas Station'),
(3, 'rg', 'vrgbv', 0, 'fbg', 'bfd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`CompanyName`),
  ADD UNIQUE KEY `CompanyName` (`CompanyName`);

--
-- Indexes for table `cusomer`
--
ALTER TABLE `cusomer`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `customervehicles`
--
ALTER TABLE `customervehicles`
  ADD UNIQUE KEY `PlateNumber` (`PlateNumber`);

--
-- Indexes for table `Join_our_team`
--
ALTER TABLE `Join_our_team`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderNum`);

--
-- Indexes for table `order_form`
--
ALTER TABLE `order_form`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `provideraccount`
--
ALTER TABLE `provideraccount`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cusomer`
--
ALTER TABLE `cusomer`
  MODIFY `ID` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Join_our_team`
--
ALTER TABLE `Join_our_team`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderNum` int(60) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_form`
--
ALTER TABLE `order_form`
  MODIFY `ID` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `provideraccount`
--
ALTER TABLE `provideraccount`
  MODIFY `ID` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
