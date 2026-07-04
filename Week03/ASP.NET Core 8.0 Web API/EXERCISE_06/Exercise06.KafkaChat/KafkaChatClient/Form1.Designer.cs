namespace KafkaChatClient
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer? components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        private void InitializeComponent()
        {
            txtMessage = new TextBox();
            btnSend = new Button();
            lstMessages = new ListBox();

            SuspendLayout();

            // txtMessage
            txtMessage.Location = new Point(12, 20);
            txtMessage.Name = "txtMessage";
            txtMessage.Size = new Size(760, 27);
            txtMessage.TabIndex = 0;

            // btnSend
            btnSend.Location = new Point(330, 65);
            btnSend.Name = "btnSend";
            btnSend.Size = new Size(120, 40);
            btnSend.TabIndex = 1;
            btnSend.Text = "Send";
            btnSend.UseVisualStyleBackColor = true;
            btnSend.Click += btnSend_Click;

            // lstMessages
            lstMessages.FormattingEnabled = true;
            lstMessages.Location = new Point(12, 125);
            lstMessages.Name = "lstMessages";
            lstMessages.Size = new Size(760, 304);
            lstMessages.TabIndex = 2;

            // Form1
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(lstMessages);
            Controls.Add(btnSend);
            Controls.Add(txtMessage);
            Name = "Form1";
            Text = "Kafka Chat Client";

            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox txtMessage;
        private Button btnSend;
        private ListBox lstMessages;
    }
}