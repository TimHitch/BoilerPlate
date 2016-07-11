module objects{
    export class Button extends createjs.Bitmap{
        constructor(pathString: string, x:number, y:number,isCentered:boolean){
            super(pathString);

            if(isCentered){
                this.regX = this.getBounds().width * 0.5;
                this.regX = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y =y;

            this.on("mouseover", this._mouseOver);
            this.on("mouseout",this._mouseOut);
        }

        private _mouseOver(event:createjs.MouseEvent):void{
            this.alpha = 0.7;
        }
        private _mouseOut(event:createjs.MouseEvent):void{
            this.alpha = 1.0;
        }

            }
        }
    
