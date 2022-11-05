@regression @smoke @DP-002

Feature: Corning brand outline 

Scenario Outline: Search for items with products name
Given open Corning homepage
When Click on Search box
And Search by the "<Items>"
And filter by "<Type>"
Then Item list should have only open by "<Type>"

Examples:

| Items       | Type		  |
| Central Hub | Optical   |
| Flasks      | Medical   |
| Tubing      | Optical 	|