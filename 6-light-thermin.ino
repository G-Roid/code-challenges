int sensorPin = A0;
int ledPin = 13;
int sensorValue = 0;
int sensorLow = 1023;
int sensorHigh = 0; 

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH);

  while(millis() < 5000) {
    sensorValue = analogRead(sensorPin);
//    Serial.println(sensorValue);
//    delay(15);   
      if(sensorValue > sensorHigh) {
        sensorHigh = sensorValue;
      } 
      if(sensorValue < sensorLow) {
        sensorLow = sensorValue; 
      }
  }
  Serial.print("Low: ");
  Serial.print(sensorLow);
  Serial.print("\t");
  Serial.print("High: ");
  Serial.println(sensorHigh);
  
  digitalWrite(ledPin, LOW);

}

void loop() {

  sensorValue = analogRead(sensorPin);
  int pitch = map(sensorValue, sensorLow, sensorHigh, 50, 4000);
  tone(8, pitch, 20);
  Serial.println(sensorValue);

  delay(10);

}
