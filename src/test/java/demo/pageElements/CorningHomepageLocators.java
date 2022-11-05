package demo.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

 public class CorningHomepageLocators {
	
	//click search box
	@FindBy(xpath="//i[@class='corn-icon-search-icon header__icon']")
	public WebElement txtbxClick;
	
	 	
	//Search for optical
	@FindBy(xpath="//input[@name='search']")
	public WebElement cbxSearch;
		
    //click on submit button
    @FindBy(xpath="//button[@type='submit']")
    public WebElement btnSubmit; 
	
	
	

}
