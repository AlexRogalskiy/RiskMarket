package ru.riskmarket.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.codeborne.selenide.Selenide.sleep;

/**
 * Created by VKov on 17-Mar-16.
 */
public class MyStepdefs {
    @Given("^open riskmarket\\.ru$")
    public void openRiskmarketRu()
    {
        open("http://riskmarket.ru");
    }

    @And("^select a countries: (.*)$")
    public void selectACountries(List<String> countries){
        for(String str : countries)
        {
            $("#countryInput").sendKeys(str);
            $("#countryInput").pressEnter();
        }
    }

    @And("^specify the dates of journey, any available dates$")
    public void specifyTheDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()
    {
        $("#preview").click();
        $(".period-control-popup-day-body").$("span[data-ng-click]").click();
        $(".period-control-popup-day-body").$("span[data-ng-click]").click();
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
        $(byText(button)).click();
    }

    @And("^make a pause$")
    public void makeAPause()
    {
        sleep(3000);
    }
}
