package ru.riskmarket.pageobjects;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;

/**
 * Created by VKov on 08-Apr-16.
 */
public class ThirdPage extends AbstractPage {

    @NameOfElement("lastName")
    @FindBy(xpath = ".//input[@name='lastName']")
    SelenideElement lastName;

    @NameOfElement("firstName")
    @FindBy(xpath = ".//input[@name='firstName']")
    SelenideElement firstName;

    @NameOfElement("Принимаю")
    @FindBy(xpath = ".//*[contains(text(),'Принимаю')]")
    SelenideElement accept;

    @NameOfElement("Оформить")
    @FindBy(xpath = ".//*[@value='Оформить']")
    SelenideElement content;

    @NameOfElement("Оплатить")
    @FindBy(xpath = ".//button[.='Оплатить']")
    SelenideElement pay;

}
