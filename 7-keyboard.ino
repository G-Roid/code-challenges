int buttonPin = A0;
int speakerPin = 8;
int keyValue = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  keyValue = analogRead(buttonPin);
  Serial.println(keyValue);
  if(keyValue > 3 && keyValue < 10) {
    tone(speakerPin, 261);
    }
   else if(keyValue > 500 && keyValue < 600) {
    tone(speakerPin, 293);
    }
   else if(keyValue > 900 && keyValue < 1010) {
    tone(speakerPin, 329);
    }
   else if(keyValue > 1010) {
    tone(speakerPin, 349);
    }
    else {
      noTone(8);
    }
      



}
