package ru.riskmarket.pageobjects;

import com.codeborne.selenide.Condition;
import org.openqa.selenium.WebElement;

/**
 * Created by vkov on 15-Apr-16.
 */
public class CustomConditions {

    public static Condition spinnerShoudBeVisible() {
        return new Condition("spinnerShoudBeVisible") {
            @Override
            public boolean apply(WebElement element) {
                return element.isDisplayed();
            }
            @Override
            public String toString() {
                return name + " " + "spinnerShoudBeVisible";
            }
        };
    }
}
