package LibraryManagementSystem.Library;
import java.util.ArrayList;
import LibraryManagementSystem.Exceptions.ItemAlreadyExists;
import LibraryManagementSystem.Exceptions.ItemNotFoundException;
import MenuSystem.Menu;
import MenuSystem.MenuItem;

public class Library<T extends LibraryEntity> {
    private ArrayList<T> collectionArrayList = new ArrayList<T>();
    
    public static void showMainMenu()
    {
        MenuItem item1 = new MenuItem("Manage Library Items", LibraryEntity.manageLibraryEntities());
       
       
        // MenuItem item1 = new MenuItem("Add New Library Item", LibraryItem.addNewLibraryItem());
        // MenuItem item2 = new MenuItem("Update/Display Library Items", LibraryItem.updateLibraryItem());
        // MenuItem item3 = new MenuItem("Add New Client", LibraryItem.updateLibraryItem());
        // MenuItem item2 = new MenuItem("Create New Client", LibraryItem.AddNewLibraryItem());
        
        // init Menu
        Menu mainMenu = new Menu("Main Menu");

        // add menu items to main menu
        mainMenu.addMenuItem(item1);
        // mainMenu.addMenuItem(item2);
        // mainMenu.addMenuItem(item3);

        // show menu
        mainMenu.showMenu();
    }

    public void add(T libraryItem) throws ItemAlreadyExists
    {
        // check if id exists
        if (this.isIdExists(libraryItem.getId())) {
            throw new ItemAlreadyExists(libraryItem.getEntityType().toString() + " with id [" + libraryItem.getId() + "] alrady exists cannot create two " + libraryItem.getEntityType().toString() + " with the same id");
        }
        collectionArrayList.add(libraryItem);
    }

    public boolean isIdExists(String id)
    {
        return collectionArrayList.stream().anyMatch(x -> x.getId() == id);
    }

    public T findItemById(String id) throws ItemNotFoundException
    {
        for (int i = 0; i < collectionArrayList.size(); i++) {
            if (collectionArrayList.get(i).getId() == id)
            {
                return collectionArrayList.get(i);
            }
        }
        throw new ItemNotFoundException("Item with id ["+ id +"] is not exist");
    }

    public ArrayList<T> getAllLibraryItems() {
        return collectionArrayList;
    }
}