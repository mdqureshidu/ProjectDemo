@regression @smoke @Feature03
Feature: Corning Search Functionality


Scenario: Search for optical items
	Given Open Corning Homepage
	When Click on Search box
	And Search for optical
	And Click on Submit button
	Then Optical items should be appeared