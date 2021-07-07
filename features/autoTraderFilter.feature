@atfilter @smoke
Feature: Auto Trader Filter

    Scenario Outline: search for a product on Auto Trader

        Given I on AutoTrader
        And I enter postcode
        And I select miles
        And I select make <make>
        And I select min price
        When I press search
        Then I see the results
        Examples:
            | make |
            | AUDI |
            | BMW  |
