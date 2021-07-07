@zaizisearch @smoke
Feature: test searchbar

    Scenario: search for the term 'work'
    Given I am on the zaizi page
    When I search for the term work
    Then I see the search results

    