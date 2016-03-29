$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoketest#1.feature");
formatter.feature({
  "line": 1,
  "name": "smoke test #1, go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\"",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-the-service-to-button-\"купить\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#actions at first page"
    }
  ],
  "line": 6,
  "name": "open riskmarket.ru",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "press button with text \"Вход в кабинет\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "type to input with name \"Логин\" text: \"riskmarket.testoviy2016@yandex.ru\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "type to input with name \"Пароль\" text: \"l0dcfJMB\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "press button with text \"Войти\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait until login frame disappears",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select a countries: Шенген, Финляндия, Китай",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "specify the dates of journey, any available dates",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "specify birthday of tourists: 08.12.1945",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "press button with text \"Рассчитать полис\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#actions at second page"
    }
  ],
  "line": 19,
  "name": "wait until spinner disappears",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "element with tag \"search-result-item\" should exist",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.openRiskmarketRu()"
});
formatter.result({
  "duration": 4966584189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.press(String)"
});
formatter.result({
  "duration": 390651547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Логин",
      "offset": 25
    },
    {
      "val": "riskmarket.testoviy2016@yandex.ru",
      "offset": 39
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String)"
});
formatter.result({
  "duration": 323408200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Пароль",
      "offset": 25
    },
    {
      "val": "l0dcfJMB",
      "offset": 40
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String)"
});
formatter.result({
  "duration": 180813285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Войти",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.press(String)"
});
formatter.result({
  "duration": 96467675,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilLoginFrameDisappears()"
});
formatter.result({
  "duration": 3708914541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Шенген, Финляндия, Китай",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.selectACountries(String\u003e)"
});
formatter.result({
  "duration": 1885016059,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.specifyTheDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()"
});
formatter.result({
  "duration": 1056049742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 30
    },
    {
      "val": "12",
      "offset": 33
    },
    {
      "val": "1945",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.specifyBirthdayOfTourists(String,String,String)"
});
formatter.result({
  "duration": 472159281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Рассчитать полис",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.press(String)"
});
formatter.result({
  "duration": 358040,
  "error_message": "java.lang.NullPointerException\r\n\tat ru.riskmarket.steps.MyStepdefs.press(MyStepdefs.java:63)\r\n\tat ✽.When press button with text \"Рассчитать полис\"(smoketest#1.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilSpinnerDisappears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "search-result-item",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.elementWithTagShouldExist(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "go through service to yandex pay-page",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-service-to-yandex-pay-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "press button with text \"КУПИТЬ\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#actions at thord page"
    }
  ],
  "line": 26,
  "name": "type to input with name \"lastName\" text: \"TESTOVIY\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "type to input with name \"firstName\" text: \"TEST\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "press element with text \"Принимаю\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "press element with value \"Оформить\" and it should be enabled",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "press button with text \"Оплатить\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "verify that page with url \"https://money.yandex.ru/cashdesk\" is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "КУПИТЬ",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.press(String)"
});
formatter.result({
  "duration": 769767,
  "error_message": "java.lang.NullPointerException\r\n\tat ru.riskmarket.steps.MyStepdefs.press(MyStepdefs.java:63)\r\n\tat ✽.Given press button with text \"КУПИТЬ\"(smoketest#1.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 25
    },
    {
      "val": "TESTOVIY",
      "offset": 42
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 25
    },
    {
      "val": "TEST",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Принимаю",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.pressElementWithText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Оформить",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.pressElementWithTextAndItShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.press(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://money.yandex.ru/cashdesk",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifyThatPageWithUrlIsOpened(String)"
});
formatter.result({
  "status": "skipped"
});
});