package ru.riskmarket.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by VKov on 28-Mar-16.
 */

@RunWith(Cucumber.class)

@CucumberOptions(
        format = {"pretty",
                  "html:target/cucumber-report/smoketest"},
        features = "src/test/java/ru/riskmarket/features",
        glue = "ru/riskmarket/steps"
)

public class SmokeTest {
}
