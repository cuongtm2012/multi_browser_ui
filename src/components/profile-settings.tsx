import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Tooltip } from './ui/tooltip';
import { 
  User, Settings, Wifi, Globe, Palette, Cpu, Volume2, Type, Camera, 
  Database, Bookmark, Puzzle, Plug, Save, X, Upload, TestTube, 
  Info, Shield, Eye, EyeOff, Download, Plus, Trash2
} from 'lucide-react';

interface ProfileSettingsProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export function ProfileSettings({ onSave, onCancel }: ProfileSettingsProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [hasChanges, setHasChanges] = useState(false);
  
  // Comprehensive form data for browser profile management
  const [formData, setFormData] = useState({
    // Overview
    profileName: 'Default Profile',
    description: 'Main browser profile for daily use',
    status: 'active',
    browserType: 'chrome',
    operatingSystem: 'windows',
    screenResolution: '1920x1080',
    quickLanguage: 'en-US',
    
    // Proxy
    enableProxy: false,
    proxyType: 'http',
    proxyServer: '',
    proxyPort: '',
    proxyUsername: '',
    proxyPassword: '',
    proxyAuth: false,
    
    // Timezone
    timezone: 'America/New_York',
    geolocation: 'auto',
    customLat: '',
    customLng: '',
    languages: ['en-US', 'en'],
    country: 'US',
    
    // WebRTC
    webrtcMode: 'default',
    ipLeakProtection: true,
    customIP: '',
    disableWebRTC: false,
    
    // Canvas
    canvasProtection: true,
    canvasMode: 'noise',
    clientRectsProtection: true,
    canvasSpoofingLevel: [3],
    
    // WebGL
    webglProtection: true,
    vendorSpoofing: 'Intel Inc.',
    rendererSpoofing: 'Intel(R) UHD Graphics 620',
    imageHashNoiseLevel: [2],
    
    // Audio
    audioProtection: true,
    audioNoiseLevel: [1],
    audioDeviceSpoofing: true,
    
    // Fonts
    fontProtection: true,
    allowedFonts: ['Arial', 'Times New Roman', 'Calibri'],
    blockUnlistedFonts: true,
    
    // Media
    cameraAccess: false,
    microphoneAccess: false,
    deviceCountSpoofing: '2',
    mediaDeviceIds: '',
    
    // Storage
    localStorage: true,
    sessionStorage: true,
    indexedDB: true,
    storageQuota: '50',
    
    // Bookmarks
    defaultBookmarks: ['Google', 'GitHub', 'Stack Overflow'],
    bookmarkFolders: ['Work', 'Personal', 'Development'],
    
    // Extensions
    enableExtensions: true,
    installedExtensions: ['uBlock Origin', 'LastPass'],
    privacyExtensions: ['AdBlock', 'Privacy Badger'],
    
    // Plugins
    enablePlugins: true,
    allowedPlugins: ['PDF Viewer', 'Flash Player'],
    blockUnlistedPlugins: true,
    pluginExecutionPolicy: 'ask'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
    onSave?.();
  };

  const handleCancel = () => {
    setHasChanges(false);
    onCancel?.();
  };

  const testProxyConnection = () => {
    // Mock proxy test
    alert('Proxy connection test: Success');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1>Browser Profile Settings</h1>
        <p className="text-muted-foreground">
          Configure your browser profile for enhanced privacy and customization
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="inline-flex h-auto p-1 space-x-1">
            <TabsTrigger value="overview" className="flex items-center gap-2 px-3 py-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="proxy" className="flex items-center gap-2 px-3 py-2">
              <Wifi className="h-4 w-4" />
              <span className="hidden sm:inline">Proxy</span>
            </TabsTrigger>
            <TabsTrigger value="timezone" className="flex items-center gap-2 px-3 py-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Timezone</span>
            </TabsTrigger>
            <TabsTrigger value="webrtc" className="flex items-center gap-2 px-3 py-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">WebRTC</span>
            </TabsTrigger>
            <TabsTrigger value="canvas" className="flex items-center gap-2 px-3 py-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Canvas</span>
            </TabsTrigger>
            <TabsTrigger value="webgl" className="flex items-center gap-2 px-3 py-2">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">WebGL</span>
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2 px-3 py-2">
              <Volume2 className="h-4 w-4" />
              <span className="hidden sm:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger value="fonts" className="flex items-center gap-2 px-3 py-2">
              <Type className="h-4 w-4" />
              <span className="hidden sm:inline">Fonts</span>
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2 px-3 py-2">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Media</span>
            </TabsTrigger>
            <TabsTrigger value="storage" className="flex items-center gap-2 px-3 py-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Storage</span>
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="flex items-center gap-2 px-3 py-2">
              <Bookmark className="h-4 w-4" />
              <span className="hidden sm:inline">Bookmarks</span>
            </TabsTrigger>
            <TabsTrigger value="extensions" className="flex items-center gap-2 px-3 py-2">
              <Puzzle className="h-4 w-4" />
              <span className="hidden sm:inline">Extensions</span>
            </TabsTrigger>
            <TabsTrigger value="plugins" className="flex items-center gap-2 px-3 py-2">
              <Plug className="h-4 w-4" />
              <span className="hidden sm:inline">Plugins</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
              <CardDescription>
                Basic profile information and browser configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Profile Avatar Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <div>
                    <h3>Profile Avatar</h3>
                    <p className="text-muted-foreground">
                      Upload a custom avatar for this profile
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New
                    </Button>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="profileName">Profile Name</Label>
                  <Input
                    id="profileName"
                    value={formData.profileName}
                    onChange={(e) => handleInputChange('profileName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe this profile's purpose..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="browserType">Browser Type</Label>
                  <Select value={formData.browserType} onValueChange={(value) => handleInputChange('browserType', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chrome">Google Chrome</SelectItem>
                      <SelectItem value="firefox">Mozilla Firefox</SelectItem>
                      <SelectItem value="safari">Safari</SelectItem>
                      <SelectItem value="edge">Microsoft Edge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="operatingSystem">Operating System</Label>
                  <Select value={formData.operatingSystem} onValueChange={(value) => handleInputChange('operatingSystem', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="windows">Windows</SelectItem>
                      <SelectItem value="macos">macOS</SelectItem>
                      <SelectItem value="linux">Linux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="screenResolution">Screen Resolution</Label>
                  <Select value={formData.screenResolution} onValueChange={(value) => handleInputChange('screenResolution', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1920x1080">1920x1080</SelectItem>
                      <SelectItem value="1366x768">1366x768</SelectItem>
                      <SelectItem value="1440x900">1440x900</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quickLanguage">Quick Language Selection</Label>
                <Select value={formData.quickLanguage} onValueChange={(value) => handleInputChange('quickLanguage', value)}>
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="en-GB">English (UK)</SelectItem>
                    <SelectItem value="es-ES">Spanish</SelectItem>
                    <SelectItem value="fr-FR">French</SelectItem>
                    <SelectItem value="de-DE">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Proxy Tab */}
        <TabsContent value="proxy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Proxy Configuration</CardTitle>
              <CardDescription>
                Configure proxy settings for this profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Enable Proxy</h4>
                  <p className="text-muted-foreground">
                    Route traffic through a proxy server
                  </p>
                </div>
                <Switch
                  checked={formData.enableProxy}
                  onCheckedChange={(checked) => handleInputChange('enableProxy', checked)}
                />
              </div>

              {formData.enableProxy && (
                <>
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="proxyType">Proxy Type</Label>
                      <Select value={formData.proxyType} onValueChange={(value) => handleInputChange('proxyType', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="http">HTTP</SelectItem>
                          <SelectItem value="https">HTTPS</SelectItem>
                          <SelectItem value="socks4">SOCKS4</SelectItem>
                          <SelectItem value="socks5">SOCKS5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="proxyServer">Proxy Server Address</Label>
                      <Input
                        id="proxyServer"
                        placeholder="127.0.0.1"
                        value={formData.proxyServer}
                        onChange={(e) => handleInputChange('proxyServer', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proxyPort">Proxy Port</Label>
                    <Input
                      id="proxyPort"
                      placeholder="8080"
                      value={formData.proxyPort}
                      onChange={(e) => handleInputChange('proxyPort', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4>Proxy Authentication</h4>
                      <p className="text-muted-foreground">
                        Enable if proxy requires username/password
                      </p>
                    </div>
                    <Switch
                      checked={formData.proxyAuth}
                      onCheckedChange={(checked) => handleInputChange('proxyAuth', checked)}
                    />
                  </div>

                  {formData.proxyAuth && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="proxyUsername">Username</Label>
                        <Input
                          id="proxyUsername"
                          value={formData.proxyUsername}
                          onChange={(e) => handleInputChange('proxyUsername', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="proxyPassword">Password</Label>
                        <Input
                          id="proxyPassword"
                          type="password"
                          value={formData.proxyPassword}
                          onChange={(e) => handleInputChange('proxyPassword', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button variant="outline" onClick={testProxyConnection}>
                      <TestTube className="h-4 w-4 mr-2" />
                      Test Proxy Connection
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add more tabs here - I'll continue with the remaining tabs */}
        
        {/* Timezone Tab */}
        <TabsContent value="timezone" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Timezone & Location</CardTitle>
              <CardDescription>
                Configure timezone, geolocation, and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={formData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (UTC-6)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (UTC-7)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="Europe/London">GMT (UTC+0)</SelectItem>
                      <SelectItem value="Europe/Paris">CET (UTC+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country/Region</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="GB">United Kingdom</SelectItem>
                      <SelectItem value="DE">Germany</SelectItem>
                      <SelectItem value="FR">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Geolocation</Label>
                <Select value={formData.geolocation} onValueChange={(value) => handleInputChange('geolocation', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-detect</SelectItem>
                    <SelectItem value="manual">Manual Input</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.geolocation === 'manual' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="customLat">Latitude</Label>
                    <Input
                      id="customLat"
                      placeholder="40.7128"
                      value={formData.customLat}
                      onChange={(e) => handleInputChange('customLat', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customLng">Longitude</Label>
                    <Input
                      id="customLng"
                      placeholder="-74.0060"
                      value={formData.customLng}
                      onChange={(e) => handleInputChange('customLng', e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Languages (Multi-select)</Label>
                <div className="flex flex-wrap gap-2">
                  {['en-US', 'en-GB', 'es-ES', 'fr-FR', 'de-DE', 'it-IT'].map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                        id={lang}
                        checked={formData.languages.includes(lang)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleInputChange('languages', [...formData.languages, lang]);
                          } else {
                            handleInputChange('languages', formData.languages.filter(l => l !== lang));
                          }
                        }}
                      />
                      <Label htmlFor={lang}>{lang}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* WebRTC Tab */}
        <TabsContent value="webrtc" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WebRTC Settings</CardTitle>
              <CardDescription>
                Configure WebRTC behavior and IP leak protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>WebRTC Mode</Label>
                <Select value={formData.webrtcMode} onValueChange={(value) => handleInputChange('webrtcMode', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="block">Block</SelectItem>
                    <SelectItem value="proxy">Proxy Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>IP Leak Protection</h4>
                  <p className="text-muted-foreground">
                    Prevent real IP address from leaking through WebRTC
                  </p>
                </div>
                <Switch
                  checked={formData.ipLeakProtection}
                  onCheckedChange={(checked) => handleInputChange('ipLeakProtection', checked)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customIP">Custom IP (Optional)</Label>
                <Input
                  id="customIP"
                  placeholder="192.168.1.1"
                  value={formData.customIP}
                  onChange={(e) => handleInputChange('customIP', e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Disable WebRTC</h4>
                  <p className="text-muted-foreground">
                    Completely disable WebRTC functionality
                  </p>
                </div>
                <Switch
                  checked={formData.disableWebRTC}
                  onCheckedChange={(checked) => handleInputChange('disableWebRTC', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Canvas Tab */}
        <TabsContent value="canvas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Canvas Protection</CardTitle>
              <CardDescription>
                Configure canvas fingerprinting protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Canvas Protection</h4>
                  <p className="text-muted-foreground">
                    Protect against canvas fingerprinting
                  </p>
                </div>
                <Switch
                  checked={formData.canvasProtection}
                  onCheckedChange={(checked) => handleInputChange('canvasProtection', checked)}
                />
              </div>

              {formData.canvasProtection && (
                <>
                  <div className="space-y-2">
                    <Label>Protection Mode</Label>
                    <Select value={formData.canvasMode} onValueChange={(value) => handleInputChange('canvasMode', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="block">Block</SelectItem>
                        <SelectItem value="noise">Add Noise</SelectItem>
                        <SelectItem value="allow">Allow</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4>ClientRects Protection</h4>
                      <p className="text-muted-foreground">
                        Protect ClientRects fingerprinting
                      </p>
                    </div>
                    <Switch
                      checked={formData.clientRectsProtection}
                      onCheckedChange={(checked) => handleInputChange('clientRectsProtection', checked)}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Canvas Spoofing Level: {formData.canvasSpoofingLevel[0]}</Label>
                    <Slider
                      value={formData.canvasSpoofingLevel}
                      onValueChange={(value) => handleInputChange('canvasSpoofingLevel', value)}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* WebGL Tab */}
        <TabsContent value="webgl" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WebGL Protection</CardTitle>
              <CardDescription>
                Configure WebGL fingerprinting protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>WebGL Protection</h4>
                  <p className="text-muted-foreground">
                    Protect against WebGL fingerprinting
                  </p>
                </div>
                <Switch
                  checked={formData.webglProtection}
                  onCheckedChange={(checked) => handleInputChange('webglProtection', checked)}
                />
              </div>

              {formData.webglProtection && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vendorSpoofing">Vendor Spoofing</Label>
                      <Input
                        id="vendorSpoofing"
                        value={formData.vendorSpoofing}
                        onChange={(e) => handleInputChange('vendorSpoofing', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rendererSpoofing">Renderer Spoofing</Label>
                      <Input
                        id="rendererSpoofing"
                        value={formData.rendererSpoofing}
                        onChange={(e) => handleInputChange('rendererSpoofing', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Image Hash Noise Level: {formData.imageHashNoiseLevel[0]}</Label>
                    <Slider
                      value={formData.imageHashNoiseLevel}
                      onValueChange={(value) => handleInputChange('imageHashNoiseLevel', value)}
                      max={5}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>None</span>
                      <span>Maximum</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audio Tab */}
        <TabsContent value="audio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audio Protection</CardTitle>
              <CardDescription>
                Configure audio fingerprinting protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>AudioContext Protection</h4>
                  <p className="text-muted-foreground">
                    Protect against audio fingerprinting
                  </p>
                </div>
                <Switch
                  checked={formData.audioProtection}
                  onCheckedChange={(checked) => handleInputChange('audioProtection', checked)}
                />
              </div>

              {formData.audioProtection && (
                <>
                  <div className="space-y-3">
                    <Label>Audio Noise Level: {formData.audioNoiseLevel[0]}</Label>
                    <Slider
                      value={formData.audioNoiseLevel}
                      onValueChange={(value) => handleInputChange('audioNoiseLevel', value)}
                      max={5}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>None</span>
                      <span>Maximum</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4>Device Spoofing</h4>
                      <p className="text-muted-foreground">
                        Spoof audio device information
                      </p>
                    </div>
                    <Switch
                      checked={formData.audioDeviceSpoofing}
                      onCheckedChange={(checked) => handleInputChange('audioDeviceSpoofing', checked)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fonts Tab */}
        <TabsContent value="fonts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Font Protection</CardTitle>
              <CardDescription>
                Configure font fingerprinting protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Font Enumeration Protection</h4>
                  <p className="text-muted-foreground">
                    Protect against font fingerprinting
                  </p>
                </div>
                <Switch
                  checked={formData.fontProtection}
                  onCheckedChange={(checked) => handleInputChange('fontProtection', checked)}
                />
              </div>

              {formData.fontProtection && (
                <>
                  <div className="space-y-2">
                    <Label>Allowed Fonts</Label>
                    <div className="space-y-2">
                      {formData.allowedFonts.map((font, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input value={font} readOnly />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newFonts = formData.allowedFonts.filter((_, i) => i !== index);
                              handleInputChange('allowedFonts', newFonts);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newFont = prompt('Enter font name:');
                          if (newFont) {
                            handleInputChange('allowedFonts', [...formData.allowedFonts, newFont]);
                          }
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Font
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4>Block Unlisted Fonts</h4>
                      <p className="text-muted-foreground">
                        Block fonts not in the allowed list
                      </p>
                    </div>
                    <Switch
                      checked={formData.blockUnlistedFonts}
                      onCheckedChange={(checked) => handleInputChange('blockUnlistedFonts', checked)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Media Device Settings</CardTitle>
              <CardDescription>
                Configure camera, microphone, and media device access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4>Camera Access</h4>
                    <p className="text-muted-foreground">
                      Allow camera access
                    </p>
                  </div>
                  <Switch
                    checked={formData.cameraAccess}
                    onCheckedChange={(checked) => handleInputChange('cameraAccess', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4>Microphone Access</h4>
                    <p className="text-muted-foreground">
                      Allow microphone access
                    </p>
                  </div>
                  <Switch
                    checked={formData.microphoneAccess}
                    onCheckedChange={(checked) => handleInputChange('microphoneAccess', checked)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="deviceCountSpoofing">Device Count Spoofing</Label>
                  <Input
                    id="deviceCountSpoofing"
                    type="number"
                    value={formData.deviceCountSpoofing}
                    onChange={(e) => handleInputChange('deviceCountSpoofing', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mediaDeviceIds">Media Device IDs</Label>
                  <Input
                    id="mediaDeviceIds"
                    placeholder="device-id-1,device-id-2"
                    value={formData.mediaDeviceIds}
                    onChange={(e) => handleInputChange('mediaDeviceIds', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Storage Tab */}
        <TabsContent value="storage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Storage Settings</CardTitle>
              <CardDescription>
                Configure browser storage options and quotas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4>LocalStorage</h4>
                    <p className="text-muted-foreground">
                      Enable LocalStorage
                    </p>
                  </div>
                  <Switch
                    checked={formData.localStorage}
                    onCheckedChange={(checked) => handleInputChange('localStorage', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4>SessionStorage</h4>
                    <p className="text-muted-foreground">
                      Enable SessionStorage
                    </p>
                  </div>
                  <Switch
                    checked={formData.sessionStorage}
                    onCheckedChange={(checked) => handleInputChange('sessionStorage', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4>IndexedDB</h4>
                    <p className="text-muted-foreground">
                      Enable IndexedDB
                    </p>
                  </div>
                  <Switch
                    checked={formData.indexedDB}
                    onCheckedChange={(checked) => handleInputChange('indexedDB', checked)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storageQuota">Storage Quota (MB)</Label>
                <Input
                  id="storageQuota"
                  type="number"
                  value={formData.storageQuota}
                  onChange={(e) => handleInputChange('storageQuota', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bookmarks Tab */}
        <TabsContent value="bookmarks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bookmark Management</CardTitle>
              <CardDescription>
                Manage default bookmarks and bookmark folders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Default Bookmarks</Label>
                <div className="space-y-2">
                  {formData.defaultBookmarks.map((bookmark, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input value={bookmark} readOnly />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newBookmarks = formData.defaultBookmarks.filter((_, i) => i !== index);
                          handleInputChange('defaultBookmarks', newBookmarks);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newBookmark = prompt('Enter bookmark name:');
                      if (newBookmark) {
                        handleInputChange('defaultBookmarks', [...formData.defaultBookmarks, newBookmark]);
                      }
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Bookmark
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Bookmark Folders</Label>
                <div className="space-y-2">
                  {formData.bookmarkFolders.map((folder, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input value={folder} readOnly />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newFolders = formData.bookmarkFolders.filter((_, i) => i !== index);
                          handleInputChange('bookmarkFolders', newFolders);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newFolder = prompt('Enter folder name:');
                      if (newFolder) {
                        handleInputChange('bookmarkFolders', [...formData.bookmarkFolders, newFolder]);
                      }
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Folder
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex gap-3">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Bookmarks
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Bookmarks
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Extensions Tab */}
        <TabsContent value="extensions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Extension Management</CardTitle>
              <CardDescription>
                Manage browser extensions and privacy extensions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Enable Extensions</h4>
                  <p className="text-muted-foreground">
                    Allow browser extensions to run
                  </p>
                </div>
                <Switch
                  checked={formData.enableExtensions}
                  onCheckedChange={(checked) => handleInputChange('enableExtensions', checked)}
                />
              </div>

              {formData.enableExtensions && (
                <>
                  <Separator />

                  <div className="space-y-3">
                    <Label>Installed Extensions</Label>
                    <div className="space-y-2">
                      {formData.installedExtensions.map((extension, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input value={extension} readOnly />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newExtensions = formData.installedExtensions.filter((_, i) => i !== index);
                              handleInputChange('installedExtensions', newExtensions);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newExtension = prompt('Enter extension name:');
                          if (newExtension) {
                            handleInputChange('installedExtensions', [...formData.installedExtensions, newExtension]);
                          }
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Extension
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Privacy Extensions</Label>
                    <div className="flex flex-wrap gap-2">
                      {['AdBlock', 'Privacy Badger', 'Ghostery', 'uBlock Origin', 'DuckDuckGo Privacy Essentials'].map((ext) => (
                        <div key={ext} className="flex items-center space-x-2">
                          <Checkbox
                            id={ext}
                            checked={formData.privacyExtensions.includes(ext)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleInputChange('privacyExtensions', [...formData.privacyExtensions, ext]);
                              } else {
                                handleInputChange('privacyExtensions', formData.privacyExtensions.filter(e => e !== ext));
                              }
                            }}
                          />
                          <Label htmlFor={ext}>{ext}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Custom Extension
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Plugins Tab */}
        <TabsContent value="plugins" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plugin Management</CardTitle>
              <CardDescription>
                Configure browser plugins and execution policies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4>Enable Plugins</h4>
                  <p className="text-muted-foreground">
                    Allow browser plugins to run
                  </p>
                </div>
                <Switch
                  checked={formData.enablePlugins}
                  onCheckedChange={(checked) => handleInputChange('enablePlugins', checked)}
                />
              </div>

              {formData.enablePlugins && (
                <>
                  <Separator />

                  <div className="space-y-3">
                    <Label>Allowed Plugins</Label>
                    <div className="flex flex-wrap gap-2">
                      {['PDF Viewer', 'Flash Player', 'Java', 'Silverlight', 'QuickTime'].map((plugin) => (
                        <div key={plugin} className="flex items-center space-x-2">
                          <Checkbox
                            id={plugin}
                            checked={formData.allowedPlugins.includes(plugin)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleInputChange('allowedPlugins', [...formData.allowedPlugins, plugin]);
                              } else {
                                handleInputChange('allowedPlugins', formData.allowedPlugins.filter(p => p !== plugin));
                              }
                            }}
                          />
                          <Label htmlFor={plugin}>{plugin}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4>Block Unlisted Plugins</h4>
                      <p className="text-muted-foreground">
                        Block plugins not in the allowed list
                      </p>
                    </div>
                    <Switch
                      checked={formData.blockUnlistedPlugins}
                      onCheckedChange={(checked) => handleInputChange('blockUnlistedPlugins', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Plugin Execution Policy</Label>
                    <Select value={formData.pluginExecutionPolicy} onValueChange={(value) => handleInputChange('pluginExecutionPolicy', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="allow">Allow All</SelectItem>
                        <SelectItem value="ask">Ask Before Running</SelectItem>
                        <SelectItem value="block">Block All</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
      </Tabs>

      {/* Action Buttons */}
      {hasChanges && (
        <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t p-4">
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}