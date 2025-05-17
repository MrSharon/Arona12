import React, { useState } from 'react';
import { 
  Bell, Moon, Lock, Clock, Info, 
  RefreshCw, Smartphone, LogOut
} from 'lucide-react';

interface SettingSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SettingSection = ({ title, icon, children }: SettingSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="p-5 border-b border-gray-100 flex items-center">
        {icon}
        <h3 className="font-semibold ml-2">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

interface ToggleOptionProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleOption = ({ label, description, defaultChecked = false, onChange }: ToggleOptionProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  
  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <label htmlFor={label.replace(/\s+/g, '-').toLowerCase()} className="font-medium">
          {label}
        </label>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
          isChecked ? 'bg-primary-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
            isChecked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <SettingSection title="Notifications" icon={<Bell size={20} className="text-primary-600" />}>
          <div className="space-y-1">
            <ToggleOption 
              label="Daily Check-in Reminders" 
              description="Receive a reminder for your daily emotional check-in"
              defaultChecked={true}
            />
            <ToggleOption 
              label="Conversation Suggestions" 
              description="Get suggestions for new conversation topics"
              defaultChecked={true}
            />
            <ToggleOption 
              label="Progress Updates" 
              description="Notifications about your emotional intelligence progress"
              defaultChecked={true}
            />
          </div>
        </SettingSection>
        
        <SettingSection title="Privacy & Security" icon={<Lock size={20} className="text-primary-600" />}>
          <div className="space-y-1">
            <ToggleOption 
              label="Data Collection" 
              description="Allow Arona to collect data to improve your experience"
              defaultChecked={true}
            />
            <ToggleOption 
              label="Share Anonymous Insights" 
              description="Contribute to improving emotional intelligence for everyone"
              defaultChecked={false}
            />
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                Data Privacy Settings
              </button>
              <p className="mt-1 text-sm text-gray-500">
                Control what data is stored and how it's used
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                Download Your Data
              </button>
              <p className="mt-1 text-sm text-gray-500">
                Get a copy of all your conversations and profile data
              </p>
            </div>
          </div>
        </SettingSection>
        
        <SettingSection title="Appearance" icon={<Moon size={20} className="text-primary-600" />}>
          <div className="space-y-1">
            <ToggleOption 
              label="Dark Mode" 
              description="Use dark theme throughout the app"
              defaultChecked={false}
            />
            <ToggleOption 
              label="High Contrast Mode" 
              description="Increase contrast for better readability"
              defaultChecked={false}
            />
            
            <div className="mt-4">
              <label className="font-medium block mb-2">Text Size</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">A</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  defaultValue="3"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <span className="text-lg">A</span>
              </div>
            </div>
          </div>
        </SettingSection>
        
        <SettingSection title="Conversation Settings" icon={<Clock size={20} className="text-primary-600" />}>
          <div className="space-y-1">
            <ToggleOption 
              label="Save Conversation History" 
              description="Keep a record of past conversations"
              defaultChecked={true}
            />
            <ToggleOption 
              label="Emotion Analysis Indicators" 
              description="Show emotion indicators in conversations"
              defaultChecked={true}
            />
            <ToggleOption 
              label="Typing Indicators" 
              description="Show when Arona is composing a response"
              defaultChecked={true}
            />
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-red-600 hover:text-red-700 transition-colors font-medium">
                Clear All Conversation History
              </button>
              <p className="mt-1 text-sm text-gray-500">
                This action cannot be undone
              </p>
            </div>
          </div>
        </SettingSection>
        
        <SettingSection title="App Info" icon={<Info size={20} className="text-primary-600" />}>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Version</h4>
              <p className="text-sm text-gray-600">Arona v1.0.0</p>
            </div>
            
            <div>
              <h4 className="font-medium">About Arona</h4>
              <p className="text-sm text-gray-600">
                Arona is an emotional intelligence AI companion designed to help you understand emotions, 
                develop better emotional awareness, and improve your social interactions.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-2">
              <button className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm">
                Terms of Service
              </button>
              <button className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm">
                Privacy Policy
              </button>
              <button className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm">
                Help & Support
              </button>
            </div>
          </div>
        </SettingSection>
        
        <div className="flex justify-between mt-8">
          <button className="btn btn-outline flex items-center">
            <RefreshCw size={16} className="mr-2" />
            Sync Data
          </button>
          
          <div className="flex space-x-3">
            <button className="btn btn-outline flex items-center">
              <Smartphone size={16} className="mr-2" />
              Connected Devices
            </button>
            
            <button className="btn flex items-center bg-red-100 text-red-700 hover:bg-red-200 border-none">
              <LogOut size={16} className="mr-2" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;