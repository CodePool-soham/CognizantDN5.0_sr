using Confluent.Kafka;

namespace KafkaChatClient
{
    public partial class Form1 : Form
    {
        private readonly ProducerConfig producerConfig =
            new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };

        public Form1()
        {
            InitializeComponent();

            StartConsumer();
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMessage.Text))
                return;

            using var producer =
                new ProducerBuilder<Null, string>(producerConfig)
                .Build();

            string message = txtMessage.Text;

            await producer.ProduceAsync(
                "chat-topic",
                new Message<Null, string>
                {
                    Value = message
                });

            txtMessage.Clear();
        }

        private void StartConsumer()
        {
            Task.Run(() =>
            {
                var consumerConfig = new ConsumerConfig
                {
                    BootstrapServers = "localhost:9092",
                    GroupId = Guid.NewGuid().ToString(),
                    AutoOffsetReset = AutoOffsetReset.Latest
                };

                using var consumer =
                    new ConsumerBuilder<Ignore, string>(consumerConfig)
                    .Build();

                consumer.Subscribe("chat-topic");

                while (true)
                {
                    var result = consumer.Consume();

                    Invoke(new Action(() =>
                    {
                        lstMessages.Items.Add(result.Message.Value);
                    }));
                }
            });
        }
    }
}