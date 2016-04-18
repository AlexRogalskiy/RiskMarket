$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoketest#1.feature");
formatter.feature({
  "line": 2,
  "name": "smoke test #1, go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\"",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-the-service-to-button-\"купить\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#actions at first page"
    }
  ],
  "line": 7,
  "name": "open riskmarket.ru",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check that element with name \"Вход в кабинет\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press button with text \"Вход в кабинет\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "type to input with name \"Логин\" text: \"riskmarket.testoviy2016@yandex.ru\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "type to input with name \"Пароль\" text: \"l0dcfJMB\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "press button with text \"Войти\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait until login frame disappears",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select countries: Шенген, Финляндия, Китай",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "specify dates of journey, any available dates",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "specify birthday of tourists: 08.12.1945",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "press button with text \"Рассчитать полис\" on \"первая страница\"",
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
  "name": "spinner should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "wait until spinner disappears",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "collection of \"Результаты поиска\" should not be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.openRiskmarketRu()"
});
formatter.result({
  "duration": 3466247333,
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
  "duration": 2186254501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 320838048,
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
      "val": "первая страница",
      "offset": 78
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1284913837,
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
      "val": "первая страница",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1204153051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Войти",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 111985842,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilLoginFrameDisappears()"
});
formatter.result({
  "duration": 3895727259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Шенген, Финляндия, Китай",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.selectCountries(String\u003e)"
});
formatter.result({
  "duration": 1969916573,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.specifyDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()"
});
formatter.result({
  "duration": 410139340,
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
  "duration": 233192748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Рассчитать полис",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 392787130,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.spinnerShouldBeDisplayed()"
});
formatter.result({
  "duration": 585450860,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.waitUntilSpinnerDisappears()"
});
formatter.result({
  "duration": 21761769793,
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
  "duration": 250772732,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "go through service to yandex pay-page",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-service-to-yandex-pay-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "press button with text \"КУПИТЬ\" on \"вторая страница\"",
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
  "name": "type to input with name \"lastName\" text: \"TESTOVIY\" on \"третья страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "type to input with name \"firstName\" text: \"TEST\" on \"третья страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "press button with text \"Принимаю\" on \"третья страница\"",
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
      "val": "вторая страница",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 354983101,
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
      "val": "третья страница",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1158213532,
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
      "val": "третья страница",
      "offset": 53
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1091649291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Принимаю",
      "offset": 24
    },
    {
      "val": "третья страница",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 99906365,
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
  "duration": 174771497,
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
  "duration": 3142944440,
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
  "duration": 3012539761,
  "status": "passed"
});
});