const int switchPin = 8;
unsigned long previoustime = 0;
int switchState = 0;
int previousSwitchState = 0;

int led = 2;

long intervalTime = 2000;

void setup() {
  for(int i = 2; i < 8; i++) {
    pinMode(i, OUTPUT);
      
  }

  pinMode(8, INPUT);
  Serial.begin(9600);

}

void loop() {
  Serial.println(switchState);
  unsigned long currentTime = millis();
  if(currentTime - previoustime > intervalTime) {
    previoustime = currentTime; 
    digitalWrite(led, HIGH);
    led++; 
    if(led > 7) {
      //TODO
      blink();
      
        
    }
  }

  switchState = digitalRead(8);
  if(switchState != previousSwitchState) {
    for(int j = 2; j < 8; j++) {
        digitalWrite(j, LOW);
      }
     led = 2;
     previoustime = currentTime;
      
  }
  previousSwitchState = switchState;
}


void blink() {
  
  for(int i = 2; i < 8; i++) {
      digitalWrite(i, HIGH);   
  } 
   
    delay(50);
    
  for(int i = 2; i < 8; i++) {
      digitalWrite(i, LOW);   
  }  
    delay(50); 
}
