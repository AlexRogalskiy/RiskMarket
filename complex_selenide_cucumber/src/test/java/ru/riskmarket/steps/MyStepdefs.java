package ru.riskmarket.steps;

import com.codeborne.selenide.Condition;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import ru.riskmarket.pageobjects.FirstPage;

import java.util.List;

import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

/**
 * Created by VKov on 17-Mar-16.
 */
public class MyStepdefs {

    FirstPage firstPage = page(FirstPage.class);


    @Given("^open riskmarket\\.ru$")
    public void openRiskmarketRu()
    {
        open("http://riskmarket.ru");
    }

    @And("^select a countries: (.*)$")
    public void selectACountries(List<String> countries){
        for(String str : countries)
        {
            //$("#countryInput").sendKeys(str);
            //$("#countryInput").pressEnter();
            firstPage.get("Укажите страну").sendKeys(str);
            firstPage.get("Укажите страну").pressEnter();
        }
    }

    @And("^specify the dates of journey, any available dates$")
    public void specifyTheDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()
    {
        //$("#preview").click();
        firstPage.get("Даты поездки").click();
        firstPage.clickAnyAvailableDate();
        //$(".period-control-popup-day-body").$("span[data-ng-click]").click();
        //$(".period-control-popup-day-body").$("span[data-ng-click]").click();
    }

    @And("^specify birthday of tourists: (\\d+).(\\d+).(\\d+)$")
    public void specifyBirthdayOfTourists(String day, String month, String year)
    {
        $(byText("Кто едет")).click();
        $("input[placeholder='дд.мм.гггг']").sendKeys(day + month + year);
    }


    @And("^press button with text \"([^\"]*)\"$")
    public void press(String button)
    {

        firstPage.get(button).click();
    }

    @And("^make a pause$")
    public void makeAPause()
    {
        sleep(3000);
    }

    @And("^type to input with name \"([^\"]*)\" text: \"([^\"]*)\"$")
    public void typeToInputWithNameText(String nameOfElement, String text)
    {
        //sleep(1000);
        //$("input[name=" + input + "]").sendKeys(text);
        firstPage.get(nameOfElement).sendKeys(text);
    }

    @And("^wait until login frame disappears$")
    public void waitUntilLoginFrameDisappears()
    {
        //$(".modal-content").waitUntil(Condition.disappears,7000);
        firstPage.get("Фрейм входа в кабинет").waitUntil(Condition.disappears,7000);
    }

    @And("^wait until spinner disappears$")
    public void waitUntilSpinnerDisappears()
    {
        $(".spinner-container").waitUntil(Condition.disappears, 10000);
    }

    @Then("^element with tag \"([^\"]*)\" should exist$")
    public void elementWithTagShouldExist(String tag)
    {
        $(tag).shouldBe(Condition.visible);
    }

    @And("^press element with text \"([^\"]*)\"$")
    public void pressElementWithText(String element)
    {
        press(element);
    }

    @Then("^verify that page with url \"([^\"]*)\" is opened$")
    public void verifyThatPageWithUrlIsOpened(String verifyUrl)
    {
        sleep(3000);
        String currentUrl = url();
        assertThat("ERROR: page's URL doesn't contain " + verifyUrl, currentUrl, containsString(verifyUrl));
    }

    @And("^press element with value \"([^\"]*)\" and it should be enabled")
    public void pressElementWithTextAndItShouldBe(String value)
    {
        $("*[value=" + value + "]").waitUntil(Condition.enabled, 2000).click();
    }

}
