Feature: smoke test #1, go through the service to button "Купить"

  Scenario: go through the service to button "Купить"

    Given open riskmarket.ru
    And select a countries: Шенген, Финляндия, Китай
    And specify the dates of journey, any available dates
    And specify birthday of tourists: 08.12.1945
    And press button with text "Рассчитать полис"
    And make a pause

