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
  "line": 7,
  "name": "check that element with name \"Вход в кабинет\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "press button with text \"Вход в кабинет\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "type to input with name \"Логин\" text: \"riskmarket.testoviy2016@yandex.ru\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "type to input with name \"Пароль\" text: \"l0dcfJMB\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "press button with text \"Войти\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "wait until login frame disappears",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select a countries: Шенген, Финляндия, Китай",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "specify the dates of journey, any available dates",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "specify birthday of tourists: 08.12.1945",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "press button with text \"Рассчитать полис\" on \"first page\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#actions at second page"
    }
  ],
  "line": 18,
  "name": "spinner should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "wait until spinner disappears",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "collection of \"Результаты поиска\" should not be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.openRiskmarketRu()"
});
formatter.result({
  "duration": 21389897408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.checkThatElementWithNameIsDisplayed(String)"
});
formatter.result({
  "duration": 62958625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 24
    },
    {
      "val": "first page",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 239459493,
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
    },
    {
      "val": "first page",
      "offset": 78
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1028190653,
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
    },
    {
      "val": "first page",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 325834274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Войти",
      "offset": 24
    },
    {
      "val": "first page",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 127793496,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilLoginFrameDisappears()"
});
formatter.result({
  "duration": 4141085506,
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
  "duration": 2122302922,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.specifyTheDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()"
});
formatter.result({
  "duration": 1135658883,
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
  "duration": 813609469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Рассчитать полис",
      "offset": 24
    },
    {
      "val": "first page",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 368466448,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.spinnerShouldBeDisplayed()"
});
formatter.result({
  "duration": 1396118269,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilSpinnerDisappears()"
});
formatter.result({
  "duration": 20405606471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Результаты поиска",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.collectionOfShouldNotBeEmpty(String)"
});
formatter.result({
  "duration": 53154623,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#Then element with tag \"search-result-item\" should exist"
    }
  ],
  "line": 23,
  "name": "go through service to yandex pay-page",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-service-to-yandex-pay-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "press button with text \"КУПИТЬ\" on \"second page\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#actions at third page"
    }
  ],
  "line": 27,
  "name": "type to input with name \"lastName\" text: \"TESTOVIY\" on \"third page\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "type to input with name \"firstName\" text: \"TEST\" on \"third page\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "press button with text \"Принимаю\" on \"third page\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "press element with value \"Оформить\" and it should be enabled",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "press button with text \"Оплатить\" and it should be enabled",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify that page with url \"https://money.yandex.ru/cashdesk\" is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "КУПИТЬ",
      "offset": 24
    },
    {
      "val": "second page",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 323450381,
  "status": "passed"
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
    },
    {
      "val": "third page",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 438534120,
  "status": "passed"
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
    },
    {
      "val": "third page",
      "offset": 53
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 266069569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Принимаю",
      "offset": 24
    },
    {
      "val": "third page",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 83278759,
  "status": "passed"
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
  "duration": 505821176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.pressButtonWithTextAndItShouldBeEnabled(String)"
});
formatter.result({
  "duration": 3379637470,
  "status": "passed"
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
  "duration": 7566776446,
  "status": "passed"
});
});