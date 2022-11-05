package demo.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

 public class CorningSearchResultsLocators {
	
	//Search for Optical results Feature01
	@FindBy(xpath="//a[@class= 'product-result__product-code']")
	public WebElement txtOptical; 
	
	
	//type optical Feature02
	@FindBy(xpath="//span[contains(text(),'Optical Communications')]")
	public WebElement cbxOpticalItems;
		
	//type medical Feature02
	@FindBy(xpath="//span[contains(text(),'Life Sciences')]")
	public WebElement cbxMedicalItems;
			
	//type optical2 Feature02
	@FindBy(xpath="//span[contains(text(),'Optical Communications')]")
	public WebElement cbxOpticalItems2;
	
	//Validate optical Feature02
	@FindBy(xpath="//span[contains(text(),'Unified Search')]")
	public WebElement txtUnifiedSearch;
	
	//Validate medical Feature02
	@FindBy(xpath="//span[contains(text(), 'Life Sciences')]")
	public WebElement txtmedical ;
			
	//Validate optical2 Feature02
	@FindBy(xpath="//a[@class='Analytics-SearchTabs']")
	public WebElement bnbproducts; 
	
		
		
	
	

}

