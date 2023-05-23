namespace Notes.View;

public partial class HomePage : ContentPage
{

    public List<CardData> CardList { get; set; }

    public HomePage()
	{
        InitializeComponent();

        string[] wordList = {
                "apple", "banana", "carrot", "dog", "elephant",
                "flower", "grape", "hat", "island", "jungle",
                "kiwi", "lemon", "mango", "nest", "orange",
                "pencil", "quilt", "rainbow", "strawberry", "tree",
                "umbrella", "violin", "watermelon", "xylophone", "yarn",
                "zebra", "ant", "bird", "cat", "duck", "swim", "run", "weights",
                "eat", "walk", "clean", "study", "cook", "dishes"
            };
        List<TaskItem> list1 = new List<TaskItem>();
        List<TaskItem> list2 = new List<TaskItem>();
        Random random = new Random();

        string teAddenWoord = "";

        for (int i = 0; i < 10; i++)
        {
            teAddenWoord = "° ";
            int aantalWoorden = random.Next(1, 6);
            for (int j = 0; j < aantalWoorden; j++)
            {
                teAddenWoord += wordList[random.Next(wordList.Length)];
                teAddenWoord += " ";
            }
            list1.Add(new TaskItem(teAddenWoord));
        }

        for (int i = 0; i < 3; i++)
        {
            teAddenWoord = "° ";
            int aantalWoorden = random.Next(1, 6);
            for (int j = 0; j < aantalWoorden; j++)
            {
                teAddenWoord += wordList[random.Next(wordList.Length)];
                teAddenWoord += " ";
            }
            list2.Add(new TaskItem(teAddenWoord));
        }

        CardList = new List<CardData>();

        for (int i = 0; i < 20; i++)
        {
            if (i % 2 == 0)
            {
                CardList.Add(new CardData { Title = "Card " + i, Tasks = list1 });
            }
            else
            {
                CardList.Add(new CardData { Title = "Card " + i, Tasks = list2 });
            }
        }

        BindingContext = this;
    }

}

public class CardData
{
    public string Title { get; set; }
    public List<TaskItem> Tasks { get; set; }
}

public class TaskItem
{
    public string Task { get; set; }

    public TaskItem(string task)
    {
        Task = task;
    }
}
