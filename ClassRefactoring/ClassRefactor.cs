using System;

namespace DeveloperSample.ClassRefactoring
{
    public enum SwallowType
    {
        African, European
    }

    public enum SwallowLoad
    {
        None, Coconut
    }

    public abstract class Bird {
        protected SwallowLoad Load;
        public abstract double GetAirspeedVelocity();
    }

    public class African:Bird {
        public African(SwallowLoad load = SwallowLoad.None) {
            Load = load;
        }
        public override double GetAirspeedVelocity() {
            double airSpeed = 0;

            if (Load == SwallowLoad.None) airSpeed = 22;
            if (Load == SwallowLoad.Coconut) airSpeed = 18;

            return airSpeed;
        }
    }

    public class European:Bird {
        public European(SwallowLoad load = SwallowLoad.None) {
            Load = load;
        }
        public override double GetAirspeedVelocity() {
            double airSpeed = 0;

            if (Load == SwallowLoad.None) airSpeed = 20;
            if (Load == SwallowLoad.Coconut) airSpeed = 16;

            return airSpeed;
        }
    }
}