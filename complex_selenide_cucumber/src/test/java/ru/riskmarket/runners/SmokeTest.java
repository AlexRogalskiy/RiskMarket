package ru.riskmarket.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by VKov on 28-Mar-16.
 */

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin = {"pretty",
                  "html:target/cucumber-report/smoketest",
                  "json:target/cucumber.json"},
        features = "src/test/java/ru/riskmarket/features",
        glue = "ru/riskmarket/steps",
        tags = "@smoketest"
)

public class SmokeTest {
}
