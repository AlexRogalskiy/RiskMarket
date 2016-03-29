package ru.riskmarket.pageobjects;

import com.codeborne.selenide.SelenideElement;

import java.lang.reflect.Field;

/**
 * Created by VKov on 29-Mar-16.
 */
public abstract class AbstractPage {

    public SelenideElement get(String cucumberElementName)
    {
        Class<?> clazz = this.getClass();
        for (Field field : clazz.getDeclaredFields())
        {
            if(field.isAnnotationPresent(NameOfElement.class))
            {
                NameOfElement nameOfElementAnnotation = field.getAnnotation(NameOfElement.class);
                if(nameOfElementAnnotation.value().equals(cucumberElementName))
                {
                    try {
                        return (SelenideElement)field.get(this);
                    } catch (IllegalAccessException e) {
                        System.out.println("ERROR: element with name " + cucumberElementName + " at page " + this.getClass().getName() + " is not public");
                    }
                }
            }
        }
        throw new IllegalArgumentException("ERROR: there is no such element with name " + cucumberElementName + " at page " + this.getClass().getName());
    }
}
