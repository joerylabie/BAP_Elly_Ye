using System.Collections;

namespace Notes
{
    public class AlternateColorDataTemplateSelector : DataTemplateSelector
    {
        public DataTemplate EvenTemplate { get; set; }
        public DataTemplate UnevenTemplate { get; set; }

        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            var listView = (ListView)container;
            var itemsSource = (IList)listView.ItemsSource;
            var index = itemsSource.IndexOf(item);
            return index % 2 == 0 ? EvenTemplate : UnevenTemplate;
        }
    }
}
